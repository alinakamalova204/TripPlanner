import { useState, Dispatch, SetStateAction } from 'react';
//
// type TravelPlan = {
//     // Структура данных плана путешествия
// };
//
// type TravelPlanStateType = {
//     travelPlan: TravelPlan;
//     editTravelPlan: Dispatch<SetStateAction<TravelPlan>>;
//     deleteTravelPlan: () => void;
// };
//
// const TravelPlanState = ({ initialData }: { initialData: TravelPlan }): TravelPlanStateType => {
//     const travelPlan, setTravelPlan = useState<TravelPlan>(initialData);
//
//     const editTravelPlan = (updatedData: TravelPlan) => {
//         setTravelPlan(updatedData);
//     };
//
//     const deleteTravelPlan = () => {
//         // Здесь должна быть логика удаления плана путешествия
//     };
//
//     return { travelPlan, editTravelPlan, deleteTravelPlan };
// };
//
// export default TravelPlanState;