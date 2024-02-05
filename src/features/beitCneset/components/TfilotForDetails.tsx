import { MyBox } from '../../global/style/MyBox.styled';
import { TfilaIF } from '../interfaces/beitCnesetIF';

interface TfilotForDetailsProps {
  tfilot: TfilaIF[];
}

export default function TfilotForDetails({ tfilot }: TfilotForDetailsProps) {
  return (
    <MyBox>
      {tfilot.map((t, i) => (
        <h3 key={i}>
          {t.tfila} {t.time}
        </h3>
      ))}
    </MyBox>
  );
}
