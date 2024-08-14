import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";

import "./AsideMenu.styles.css";

export const AsideMenu = ({ list}) => (
  <div className="aside-container">
    <aside className="aside">
      <div className="grid-container">
        {list.map((item) => {
          const id = getIdFromUrl(item.url);
          return (
            <div>
              <div key={item.url} className="grid-item">
                <Link to={`/pokemon/${id}`}>
                  <button>{item.name}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  </div>
);
