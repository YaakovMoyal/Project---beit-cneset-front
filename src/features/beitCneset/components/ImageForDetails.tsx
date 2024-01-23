import { DivImage } from "../../global/style/DivImage.styled";

interface ImageForDetailsProps {
  image: string;
}

function ImageForDetails({ image }: ImageForDetailsProps) {
  return (
    <DivImage
      $backgroundImage={image}
      $background_size="contain"
      $h="40vh"
      $w="60%"
    ></DivImage>
  );
}

export default ImageForDetails;
