export class Formation{
    private _Titre_Formation: String;
    public get Titre_Formation(): String {
        return this._Titre_Formation;
    }
    public set Titre_Formation(value: String) {
        this._Titre_Formation = value;
    }
    private _Description_Formation: String;
    public get Description_Formation(): String {
        return this._Description_Formation;
    }
    public set Description_Formation(value: String) {
        this._Description_Formation = value;
    }
    private _Nb_H_Formation: Number;
    public get Nb_H_Formation(): Number {
        return this._Nb_H_Formation;
    }
    public set Nb_H_Formation(value: Number) {
        this._Nb_H_Formation = value;
    }
    private _Programme_Formation: String;
    public get Programme_Formation(): String {
        return this._Programme_Formation;
    }
    public set Programme_Formation(value: String) {
        this._Programme_Formation = value;
    }
    private _Difficulte_Formation: String;
    public get Difficulte_Formation(): String {
        return this._Difficulte_Formation;
    }
    public set Difficulte_Formation(value: String) {
        this._Difficulte_Formation = value;
    }

    private _Mots_Cle: Object;
    public get Mots_Cle(): Object {
        return this._Mots_Cle;
    }
    public set Mots_Cle(value: Object) {
        this._Mots_Cle = value;
    }
}