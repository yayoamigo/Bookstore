import { useDispatch, useSelector} from "react-redux";
import { checkAction } from "../redux/categories/categories";

function Categorie() {
  const dispatch = useDispatch();
  const categorie = useSelector((state) => state.categories)
  return (
    <div>
      <button type="button" onClick={() => dispatch(checkAction())}>
      Check status
      </button>
      <h2>{categorie}</h2>
    </div>
  )
}

export default Categorie