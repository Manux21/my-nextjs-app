import Link from 'next/link'
import {useEffect, useState} from "react";

export default function List() {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://localhost:3001/vehicles');
      const ownersList = await response.json();
      setOwners(ownersList);
    }
  })




return (

  <div>
    {people.map(e => (
      <div>
        <Link as={`/${e.v}/${e.name}`} href='/[vehicle]/[person]'>
          <a>Navigate to {e.name}'s {e.v}</a>
        </Link>
      </div>
      ))}
  </div>
  )

}