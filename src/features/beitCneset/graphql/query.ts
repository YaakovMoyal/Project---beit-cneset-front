import { gql } from "@apollo/client";

const GET_ONE_BEIT_CNESET = gql`
  {
    getBeitCnesetByName {
      address
      community
      image
      gabai {
        email
        password
        managementOf
        name
        phone
      }
      name
      tfilot {
        tfila
        time
      }
    }
  }
`;

const GET_ALL_BEIT_CNESET = gql`
  {
    getAllBeitCneset {
      address
      community
      image
      gabai {
        email
        password
        managementOf
        name
        phone
      }
      name
      tfilot {
        tfila
        time
      }
    }
  }
`;

export { GET_ONE_BEIT_CNESET, GET_ALL_BEIT_CNESET };
