export interface User{
    userId: number,
    userName: string,
    authority: string,
    
    SpotifyGuid: string,


}
export type PostUser = Omit<User, "userId">;