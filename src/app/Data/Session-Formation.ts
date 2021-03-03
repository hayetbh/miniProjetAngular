export class SessionFormation {
    private _Date_Debut: Date;
    public get Date_Debut(): Date {
        return this._Date_Debut;
    }
    public set Date_Debut(value: Date) {
        this._Date_Debut = value;
    }
    private _Date_Fin: Date;
    public get Date_Fin(): Date {
        return this._Date_Fin;
    }
    public set Date_Fin(value: Date) {
        this._Date_Fin = value;
    }
    private _Planing: string;
    public get Planing(): string {
        return this._Planing;
    }
    public set Planing(value: string) {
        this._Planing = value;
    }
    private _id_formateur: number;
    public get id_formateur(): number {
        return this._id_formateur;
    }
    public set id_formateur(value: number) {
        this._id_formateur = value;
    }
    private _id_formation: number;
    public get id_formation(): number {
        return this._id_formation;
    }
    public set id_formation(value: number) {
        this._id_formation = value;
    }

}