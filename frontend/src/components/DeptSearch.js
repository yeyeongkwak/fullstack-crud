import react, { useState } from "react";
import style from "./DeptSearch.module.css";
import axios from "axios";

function DeptSearch() {
    const [list, setList] = useState(false);
    const [deptAll, setDeptAll] = useState([]);
    const [deptList, setDeptList] = useState([]);

    const onDeptAllHandler = () => {
        axios
            .get("http://localhost:8080/wehanju/api/depts")
            .then((res) => setDeptAll(res.data));

        setList(!list);
    };

    //부서번호로 조회하도록 작성한 핸들러
    const onDeptIdHandler = () => {
        const deptId = document.getElementById("deptId");
        axios
            .get(`http://localhost:8080/wehanju/api/depts/${deptId.value}`)
            .then((res) => setDeptList(res.data));
        axios
            .get("http://localhost:8080/wehanju/api/depts")
            .then((res) => setDeptAll(res.data));
    };

    //db에 있는 id와 일치여부 판단하는 함수
    const existOrNot = () => {
        for (let i = 0; i < deptAll.length; i++) {
            if (deptAll[i].departmentId == deptList.departmentId) {
                return true;
            }
        }
    };
    return (
        <div className={style.container}>
            <div className={style.deptall}>
                <h4>부서정보 전체 조회</h4>
                <p>전체 부서정보를 조회하고 싶다면 버튼을 클릭해보세요</p>
                {list === true ? (
                    <button
                        className={style.deptallbtn}
                        onClick={onDeptAllHandler}
                    >
                        리스트 닫기
                    </button>
                ) : (
                    <button
                        onClick={onDeptAllHandler}
                        className={style.deptallbtn}
                    >
                        클릭!!
                    </button>
                )}

                {deptAll.map((info) => {
                    return (
                        <div
                            style={{ display: list ? "block" : "none" }}
                            key={info.departmentId}
                        >
                            <p>
                                <span className={style.deptallspan}>
                                    부서 번호: {info.departmentId}
                                </span>
                                <span className={style.deptallspan}>
                                    부서명: {info.departmentName}
                                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className={style.deptall}>
                <h4>부서 ID로 부서 조회하기</h4>
                <p>전체 부서정보를 조회하고 싶다면 버튼을 클릭해보세요</p>
                <p>
                    조회할 부서 ID: <input type="text" id="deptId" />
                </p>
                <button className={style.deptallbtn} onClick={onDeptIdHandler}>
                    조회하기
                </button>

                {existOrNot() ? (
                    <div>
                        <p>
                            <span className={style.deptallspan}>
                                부서 번호: {deptList.departmentId}
                            </span>
                            <span className={style.deptallspan}>
                                부서명: {deptList.departmentName}
                            </span>
                        </p>
                    </div>
                ) : (
                    <div>
                        <p>입력하신 ID는 존재하지 않는 부서 ID입니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DeptSearch;
