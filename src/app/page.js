import Link from 'next/link';
import React from 'react'

const Page = () => {
  // console.log(process.env);
  console.log(process.env.DB_PASSWORD);
  return (
    <div>hello world nextjs ...

      <Link href='/addproduct'  target='blank'>Add products</Link>
    </div>
  )
}

export default Page