import { UserProfile } from './user-profile';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    userProfile: UserProfile;

    constructor(){}
}
