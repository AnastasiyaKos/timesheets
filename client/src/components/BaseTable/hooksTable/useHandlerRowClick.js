import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";


const useHandlerRowClick = ({dataType}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  return async (row) => {
    switch (dataType) {
      default:
        navigate(`${row.id}`);
        break;
    }
  }
};

export default useHandlerRowClick;