// import { useQuery } from "@apollo/client";
// import { GET_ONE_BEIT_CNESET } from "../graphql/query.ts";
// import Loading from "../../global/components/Loading.tsx";

// const BeitCnesetPage = () => {
//   const { loading, data, error } = useQuery(GET_ONE_BEIT_CNESET);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <>{error.message}</>;
//   }

//   return (
//     <>
//       <div>{data?.getBeitCnesetByName.name}</div>
//       <div>{data?.getBeitCnesetByName.community}</div>
//       <div>{data?.getBeitCnesetByName.address}</div>
//       <div>{data?.getBeitCnesetByName.gabai.name}</div>
//       <div>{data?.getBeitCnesetByName.gabai.email}</div>
//     </>
//   );
// };

// export default BeitCnesetPage;
