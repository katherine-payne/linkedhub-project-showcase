export default function formatDescription(description) {
   if (description.includes("\n")) {
     return (
       <ul className="list-disc ml-6">
         {description.split("\n").map((bullet) => {
           return <li>{bullet}</li>;
         })}
       </ul>
     );
   } else {
     return description;
   }
 }