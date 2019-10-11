import React, { Fragment, useState } from "react";
import {Checkbox} from 'primereact/checkbox';


const Table = ({
  dataList = [],
  headers = [{ title: "", field: "" }],
  onClick = null,
  stripped = false,
  oddColor = "#eee",
  evenColor = "#fff",
  headerColor = ""
}) => {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <table className="table">
      <thead
        style={headerColor ? { background: headerColor, color: "#fff" } : {}}
      >
        <tr>
          {headers.map(({ title }, i) => (
            <th key={i} scope="col">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((el, i) => (
          <tr
            style={{
              cursor: "pointer",
              ...(stripped
                ? i % 2 !== 0
                  ? { background: evenColor }
                  : { background: oddColor }
                : {})
            }}
            key={i}
            onClick={(e) => onClick(el.id, e)}
          >
            {headers.map(({ field }, i) => (
              <Fragment key={i}>
                {field === "id" && (
                  <td>
                   <label className="td-input" style={{background: 'red', width: '100%', height: "100%"}} htmlFor={`element-${el.id}`}>
                      <input id={`element-${el.id}`} className="td-input"  type="checkbox" value={el.id}/>
                   </label>
                  </td>
                )}
                {field !== null && <td>{el[field]}</td>}
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
