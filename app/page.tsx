interface dog {
  id_dog: number;
  dog_name: string;
  breed: string;
  owner: string;
}
export default async function Home() {
  const data = [{
    id_dog: 1,
    dog_name: "Aom",
    breed: "yed mae",
    owner: "Plain"
  },{
    id_dog: 1,
    dog_name: "Aom",
    breed: "yed mae",
    owner: "Plain"
  },{
    id_dog: 1,
    dog_name: "Aom",
    breed: "yed mae",
    owner: "Plain"
  },{
    id_dog: 1,
    dog_name: "Aom",
    breed: "yed mae",
    owner: "Plain"
  },{
    id_dog: 1,
    dog_name: "Aom",
    breed: "yed mae",
    owner: "Plain"
  },]

  return (
    <>
      <h1 className="text-3xl text-center">DOG LIST</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>BREED</th>
            <th>OWNER</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dog: dog, index: number) => (
            <tr key={index}>
              <td>{dog.id_dog}</td>
              <td>{dog.dog_name}</td>
              <td>{dog.breed}</td>
              <td>{dog.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}