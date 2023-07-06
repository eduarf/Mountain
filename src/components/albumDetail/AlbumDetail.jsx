import { useDispatch, useSelector } from "react-redux";
import "./AlbumDetail.scss";
import { ImCross } from "react-icons/im";
import { closeModal } from "../../features/photoModal/modalSlice";
const AlbumDetail = () => {
  const { singlePhoto } = useSelector((store) => store.photoModal);
  const dispatch = useDispatch();
  return (
    <div className="album-detail">
      <img src={singlePhoto[0].url} alt="" className="album-detail__image" />
      <ImCross className="album-detail__icon" onClick={() => dispatch(closeModal())} />
    </div>
  );
};

export default AlbumDetail;
