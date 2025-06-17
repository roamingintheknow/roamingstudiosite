// import Image from 'next/image';
// import { getCloudinaryUrl } from "../../helpers/cloudinary";

// export default function AboutCollage() {
//   return (
//     <div className="bg-wander-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-10">
//       <div className="relative flex items-center justify-center min-h-screen md:min-h-[120vh]">
//         {/* Center vertical image */}
//         <div className="relative z-10 shadow-lg overflow-hidden bg-white">
//           <Image
//             src={getCloudinaryUrl('v1749764337/Roaming%20Studio/home%20grid/Agra-85_wol8e1.jpg', true)}
//             alt="Center"
//             width={600}
//             height={900}
//             className="w-auto h-auto max-w-full max-h-screen"
//           />
//         </div>

//         {/* Bottom-left horizontal image */}
//         <div className="absolute z-20 bottom-32 left-1 w-[200px] h-[130px] sm:w-[250px] sm:h-[160px]  md:w-[380px] md:h-[220px] shadow-lg overflow-hidden hide-766">
//           <Image
//             src={getCloudinaryUrl('v1749611596/Roaming%20Studio/Travel/Hiriketiya-64_fqddb3.jpg', false)}
//             alt="Left"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Top-right horizontal image */}
//         <div className="absolute z-20 top-6 right-1 w-[240px] h-[150px] sm:w-[290px] sm:h-[180px] md:w-[380px] md:h-[220px] shadow-lg overflow-hidden hide-766">
//           <Image
//             src={getCloudinaryUrl('v1749611569/Roaming%20Studio/Travel/BuchkonHanokVillage-20_daumet.jpg', false)}
//             alt="Right"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
