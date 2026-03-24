import { useEffect, useState } from "react";
import styles from "./App.module.css";
import axios from "axios";

function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(""); // 1: 프론트 엔드, 2: 백 엔드, 3: DB
  const [level, setLevel] = useState(""); // 1: 초급, 2: 중급, 3: 고급
  const [sort, setSort] = useState("1"); // 1: 작성순, 2: 난이도 오름차순, 3: 난이도 내림차순, 4: 수강인원 오름차순, 5: 수강인원 내림차순
  const searchReset = () => {
    setKeyword("");
    setCategory("");
    setLevel("");
    setSort("1");
  };
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKSERVER}/subjects/subjectList`, {
        params: {
          order: Number(sort) || 1,
          keyword,
          category,
          level,
        },
      })
      .then((res) => setSubjects(res.data))
      .catch((err) => console.log(err));
  }, [keyword, category, level, sort]);
  return (
    <div>
      <header className={styles.header}>
        <h1>강의 목록</h1>
      </header>

      <div className={styles.container}>
        <div className={styles.searchBox}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="button" className="btn primary">
            검색
          </button>
        </div>

        <div className={styles.filterBox}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
          >
            <option value="">모든 카테고리 조회</option>
            <option value="1">프론트 엔드</option>
            <option value="2">백 엔드</option>
            <option value="3">DB</option>
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={styles.select}
          >
            <option value="">모든 난이도 조회</option>
            <option value="1">초급</option>
            <option value="2">중급</option>
            <option value="3">고급</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={styles.select}
          >
            <option value="1">작성순</option>
            <option value="2">난이도 오름차순</option>
            <option value="3">난이도 내림차순</option>
            <option value="4">수강인원 오름차순</option>
            <option value="5">수강인원 내림차순</option>
          </select>

          <button type="button" onClick={searchReset}>
            검색 조건 초기화
          </button>
        </div>
      </div>

      <div className={styles.tableBox}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>번호(작성순)</th>
              <th>과목 이름</th>
              <th>담당 강사</th>
              <th>과목 분류</th>
              <th>과목 난이도</th>
              <th>수강 정원</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={subject.subject_no}>
                <td>{subject.subject_no}</td>
                <td>{subject.subject_title}</td>
                <td>{subject.subject_instructor}</td>
                <td>{subject.subject_category}</td>
                <td>{subject.subject_level}</td>
                <td>{subject.subject_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
