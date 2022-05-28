export interface Artist{
    id: number,
    Gid: number,
    Name: string,
    Sort_Name: string,
}

export type PostArtist = Omit<Artist, "id, Gid">;