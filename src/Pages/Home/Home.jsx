import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const { data: students, refetch } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/students");
      return res.data;
    },
  });
  const handleDeleteStudent = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("Student Delete successfully");
        refetch();
      }
    });
  };

  return (
    <div className="mx-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Depertment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {students?.map((student, idx) => (
              <tr key={student._id}>
                <th>{idx + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.depertment}</td>
                <button
                  onClick={() => handleDeleteStudent(student._id)}
                  className="btn min-h-8 h-8 bg-red-500 text-white"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
