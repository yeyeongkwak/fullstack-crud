import React, { useState } from "react";
import style from "./DeptModify.module.css";
import axios from "axios";

function DeptModify() {
    const [modDept, setModDept] = useState({
        departmentId: "",
        departmentName: "",
        departmentAvailable: "",
    });

    const { departmentId, departmentName, departmentAvailable } = modDept;
    const [modify, setModify] = useState(false);

    const onDeptModifyHandler = (e) => {
        const { name, value } = e.target;
        setModDept({ ...modDept, [name]: value });
    };
    const onDeptModify = () => {
        const deptId = document.getElementById("deptId");
        const deptNm = document.getElementById("deptNm");
        axios.put(
            `http://localhost:8080/wehanju/api/depts/${deptId.value}/${deptNm.value}`,
            {
                departmentId: parseInt(departmentId),
                departmentName: departmentName,
                departmentAvailable: parseInt(departmentAvailable),
            }
        );
        if (
            departmentId != null &&
            departmentName != null &&
            departmentAvailable != null
        ) {
            setModify(true);
        } else {
            setModify(false);
        }
    };
    return (
        <div>
            <div className={style.deptall}>
                <h4>부서 ID로 부서 정보 수정하기</h4>
                <div className={style.deptInputbox}>
                    <span>부서 번호: </span>
                    <input
                        type="text"
                        onChange={onDeptModifyHandler}
                        name="departmentId"
                        value={departmentId || ""}
                        id="deptId"
                    />
                </div>
                <div className={style.deptInputbox}>
                    <span>부서명: </span>
                    <input
                        type="text"
                        onChange={onDeptModifyHandler}
                        name="departmentName"
                        value={departmentName || ""}
                        id="deptNm"
                    />
                </div>
                <div className={style.deptInputbox}>
                    <span>부서 식별 유무: </span>
                    <input
                        type="text"
                        onChange={onDeptModifyHandler}
                        name="departmentAvailable"
                        value={departmentAvailable || ""}
                    />
                </div>

                <button onClick={onDeptModify} className={style.deptallbtn}>
                    부서 수정하기
                </button>
                <div style={{ display: modify == true ? "block" : "none" }}>
                    <div>
                        <span className={style.deptallspan}>
                            등록된 부서 번호: {modDept.departmentId}
                        </span>
                        <span className={style.deptallspan}>
                            등록된 부서명:{modDept.departmentName}
                        </span>
                        <span className={style.deptallspan}>
                            등록된 부서 식별유무:{modDept.departmentAvailable}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeptModify;
