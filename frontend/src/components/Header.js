import react from "react";
import style from "./Header.module.css";

function Header() {
    return (
        <div>
            <header>
                <h2>부서 CRUD 서비스</h2>
            </header>
            <nav>
                <ul className={style.container}>
                    <li className={style["nav-item"]}>부서 조회</li>
                    <li className={style["nav-item"]}>부서 생성</li>
                    <li className={style["nav-item"]}>부서 수정</li>
                    <li className={style["nav-item"]}>부서 삭제</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
