import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Modale({
  id,
  name,
  description,
  image,
  logo,
  websiteLink,
  githubLink,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Voir le Projet</Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="w-11/12 h-auto max-w-5xl max-h-[80vh] p-6 bg-white rounded-lg shadow-lg overflow-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center flex-col gap-1">
                <img src={logo} alt={name} />
              </ModalHeader>
              <ModalBody>
                <img src={image} alt={name} />
                <p>{description.part1}</p>
                <p>{description.part2}</p>
                <p>{description.part3}</p>
                <p>{description.part4}</p>
                <p>{description.part5}</p>
                <p>{description.part6}</p>
                <p>{description.part7}</p>
                <p>{description.part8}</p>
                <div className="flex gap-9 mt-7 justify-center">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-3xl hover:text-purple-600 cursor-pointer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-3xl hover:text-purple-600 cursor-pointer"
                  >
                    <CgWebsite />
                  </a>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
