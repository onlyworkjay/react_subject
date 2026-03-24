import styles from "./Subject.module.css";
const SubjectListPage = () => {
  return <div className={styles.list_wrap}>강의 목록</div>;
};

export default SubjectListPage;

const [order, setOrder] = useState(1); // 1: 작성순, 2:난이도 오름차순, 3: 난이도 내림차순, 4: 수강인원 오름차순 ,5: 수강인원 내림차순
