import { get } from "@/lib/axios";
import { LetterResultType } from "@/types/letter";

/**
 * @description 편지지 가지고 오는 API 
 */

export const getLetterResult = async (id:number) => {
    const response = await get<LetterResultType>(`/letter/${id}`);
    return response.data;
  };