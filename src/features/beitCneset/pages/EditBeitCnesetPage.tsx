import { useNavigate, useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { TokenIF } from '../../users/interfaces/tokenIF';
import {
  StyledContainer,
  StyledForm,
  StyledInputField,
  StyledSubmitButton,
} from '../../global/style/Form.styled';
import axios from 'axios';
import { ROUTES } from '../../global/router/routesModel';
import { BeitCnesetIF } from '../interfaces/beitCnesetIF';
import { useEffect, useState } from 'react';
import { BoxIcons } from '../../global/style/BoxIcons.styled';

export default function EditBeitCnesetPage() {
  const { bc } = useParams();
  const navigate = useNavigate();
  const [bcSelected, setBcSelected] = useState<BeitCnesetIF>({
    name: '',
    address: '',
    URLaddress: '1',
    community: '',
    image: '',
    gabai: { name: '', email: '', managementOf: '', password: '', phone: '' },
    tfilot: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/beit-cneset/${bc}`)
      .then((res) => {
        const { data } = res;
        setBcSelected(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [bc]);

  const token = localStorage.getItem('token');
  if (!token) return 'please login first';

  const userInfo: TokenIF = jwtDecode(token);
  if (!userInfo.isAdmin)
    return (
      <>
        <h1>Permission Denied</h1>
        <h2>please try again with admin user</h2>
      </>
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/beit-cneset/${bc}`, bcSelected);

      navigate(`${ROUTES.home}/${ROUTES.allBeitCneset}`);
    } catch (error) {
      console.error('Error edit data:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof BeitCnesetIF
  ) => {
    setBcSelected((prevDetails) => ({
      ...prevDetails,
      [field]: e.target.value,
    }));
  };

  const { name, community, address, image, URLaddress } = bcSelected;

  return (
    <StyledContainer>
      <h2>{`Edit ${bc}`}</h2>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInputField
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, 'name')}
        />

        <StyledInputField
          placeholder="Address"
          type="text"
          value={address}
          onChange={(e) => handleInputChange(e, 'address')}
        />

        <StyledInputField
          placeholder="URLaddress"
          type="text"
          value={URLaddress}
          onChange={(e) => handleInputChange(e, 'URLaddress')}
        />

        <StyledInputField
          placeholder="Community"
          type="text"
          value={community}
          onChange={(e) => handleInputChange(e, 'community')}
        />

        <StyledInputField
          placeholder="URL Image"
          type="text"
          value={image}
          onChange={(e) => handleInputChange(e, 'image')}
        />

        <BoxIcons>
          <StyledSubmitButton
            type="reset"
            color="#ef1313"
            onClick={() => navigate(`${ROUTES.home}/${ROUTES.allBeitCneset}`)}
          >
            Cancel
          </StyledSubmitButton>

          <StyledSubmitButton type="submit">Save</StyledSubmitButton>
        </BoxIcons>
      </StyledForm>
    </StyledContainer>
  );
}
