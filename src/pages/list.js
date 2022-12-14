import Link from 'next/link'
import {useEffect, useState} from "react";
import fetch from 'isomorphic-unfetch';

export default function List({ownersList}) {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    async function loadData() {
      const response = await fetch('http://localhost:3000/vehicles');
      const ownersList = await response.json();
      setOwners(ownersList);
    }

    loadData();
  }, []);


  return (
    <div>
      {ownersList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}