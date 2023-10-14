import { Button, useDisclosure } from "@chakra-ui/react";
import BasicFormModal from "./components/BasicFormModal";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickJoin = () => {
    onOpen()
  }

  return (
    <>
      <BasicFormModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <div className='banners-container'>
        <div id="banner-logo" className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/pr1hyG3Q/BANNER-1-min.jpg)' }}>
          <img src="https://i.postimg.cc/jS8xTn0N/LOGO-BANNER-1.png" />
        </div>
        <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/3JV0TqXY/BANNER-2-min.jpg)' }}>
          <img src="https://i.postimg.cc/yYHYyzyJ/FRASE-BANNER-2.png" />
        </div>
        <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/s29M5Dtg/BANNER-3-min.jpg)' }}>
          <img src="https://i.postimg.cc/qvBJWXY4/FRASE-BANNER-3.png" />
        </div>
        <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/vmd1162K/BANNER-4-min.jpg)' }}>
          <img src="https://i.postimg.cc/SNfQZtgg/FRASE-BANNER-4.png" />

          <Button mt={4} colorScheme="teal" onClick={() => handleClickJoin()}>Let us know</Button>
        </div>
      </div>
    </>
  );
}

export default App;
