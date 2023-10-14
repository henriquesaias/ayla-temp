import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image } from "@chakra-ui/react";
import { useState } from "react";
import BasicForm from "./BasicForm";

const BasicFormModal = ({ isOpen, onOpen, onClose }: any) => {
  const [completed, setCompleted] = useState(false)

  const handleClose = () => {
    onClose()
  }

  const handleSuccess = async () => {
    return
  }

  const DonationCompleted = () => { return }

  return (
    <>
      <Modal
        isCentered
        size='xl'
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={handleClose}
        id={`modal-completed-${completed}`}
      >
        <ModalOverlay />
        <ModalContent backgroundColor='#f8f4ec'>
          {completed
            ? ''
            : <ModalHeader textAlign='center'>Join Music Plants Trees</ModalHeader>
          }
          <ModalCloseButton color={completed ? '#f7f3e9' : undefined} />
          <ModalBody>
            {
              completed
                ? <></>
                : <>
                  <Image
                    rounded="full"
                    width="150px"
                    margin="auto auto 2em auto"
                    src="https://images.jg-cdn.com/image/3e1bf022-0e8b-4489-93f8-1e5c4aec2eba.jpg"
                  />

                </>
            }
            <BasicForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicFormModal