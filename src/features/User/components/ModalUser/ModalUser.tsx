import classNames from "classnames/bind";
import styles from "./ModalUser.module.scss";
import Modal from "@/components/Common/Modal/Modal";

const cx = classNames.bind(styles);

interface ModalUserProps{
  onClose:()=>void;
}

const ModalUser = ({onClose}:ModalUserProps) => {
  return (
    <div className={cx("modal-user")}>
      <Modal isOpen={true} onClose={onClose}>Hello </Modal>
    </div>
  );
};

export default ModalUser;
