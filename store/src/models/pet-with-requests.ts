import { InputRequest } from './input-request';
export class PetWithRequests{
	petId: number;
    name: string;
    category: string;
    imageUrl: string;
    gender: string;
    requests: InputRequest[] = [];
}