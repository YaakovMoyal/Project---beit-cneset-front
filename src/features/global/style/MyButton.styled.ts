import styled from "styled-components";

export const MyButton = styled.button`
  background-color: #4caf50; /* צבע רקע */
  color: white; /* צבע טקסט */
  padding: 10px 20px; /* רווחים פנימיים */
  font-size: 16px; /* גודל גופן */
  border: none; /* להסיר מסגרת */
  border-radius: 5px; /* חיתוך פינות */
  cursor: pointer; /* סמן עכבר מתנהג כמו ידית תיק */
  transition: background-color 0.3s; /* אנימציה שמשנה צבע רקע כאשר העכבר חופף מעליו */

  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.99);
  }
`;
