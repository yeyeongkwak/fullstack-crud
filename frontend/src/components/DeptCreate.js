import react, { useState } from "react";
import style from "./DeptCreate.module.css";
import axios from "axios";

function DeptCreate() {
    const [newDept, setNewDept] = useState({
        departmentId: "",
        departmentName: "",
        departmentAvailable: "",
    });

    const { departmentId, departmentName, departmentAvailable } = newDept;
    const [enroll, setEnroll] = useState(false);

    const onDeptCreateHandler = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setNewDept({ ...newDept, [name]: value });
    };

    const onDeptCreate = () => {
        axios.post("http://localhost:8080/wehanju/api/depts", {
            departmentId: parseInt(departmentId),
            departmentName: departmentName,
            departmentAvailable: parseInt(departmentAvailable),
        });
        if (
            departmentId != null &&
            departmentName != null &&
            departmentAvailable != null
        ) {
            setEnroll(true);
        } else {
            setEnroll(false);
        }
        console.log(newDept);
    };

    return (
        <div className={style.container}>
            <div>
                <h4>부서 생성</h4>
                <div className={style.deptInputbox}>
                    <span>부서 번호: </span>
                    <input
                        type="text"
                        onChange={onDeptCreateHandler}
                        name="departmentId"
                        value={departmentId || ""}
                    />
                </div>
                <div className={style.deptInputbox}>
                    <span>부서명: </span>
                    <input
                        type="text"
                        onChange={onDeptCreateHandler}
                        name="departmentName"
                        value={departmentName || ""}
                    />
                </div>
                <div className={style.deptInputbox}>
                    <span>부서 식별 유무: </span>
                    <input
                        type="text"
                        onChange={onDeptCreateHandler}
                        name="departmentAvailable"
                        value={departmentAvailable || ""}
                    />
                </div>

                <button onClick={onDeptCreate} className={style.deptallbtn}>
                    부서 등록하기
                </button>

                <div style={{ display: enroll ? "block" : "none" }}>
                    <div>
                        <span className={style.deptallspan}>
                            등록된 부서 번호: {newDept.departmentId}
                        </span>
                        <span className={style.deptallspan}>
                            등록된 부서명:{newDept.departmentName}
                        </span>
                        <span className={style.deptallspan}>
                            등록된 부서 식별유무:{newDept.departmentAvailable}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DeptCreate;
