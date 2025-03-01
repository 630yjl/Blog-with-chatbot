'use client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

type PostProps = {
  id: string;
};
export default function Post({ id }: PostProps) {
  return (
    <div className="flex">
      <h1>DUMMY POST {id}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  return {
    props: {
      id,
    },
  };
};

// import { useRouter } from 'next/router';

// export default function Post() {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div className="flex">
//       <h1>DUMMY POST {id}</h1>
//     </div>
//   );
// }
