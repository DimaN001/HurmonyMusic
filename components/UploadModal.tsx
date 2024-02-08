"use client";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () =>{
    const uploadModal = useUploadModal();

    const onChange=(open:boolean) =>{
        if(!open){
            uploadModal.onClose();
        }
    }
    return(
        <Modal
        title="Додати трек"
        description="Завантажити mp3 файл"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
        Форма
        </Modal>
    );
}

export default UploadModal;