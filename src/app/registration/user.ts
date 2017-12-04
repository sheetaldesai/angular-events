export class User {
    constructor (
        public firstname : string = "",
        public lastname : string = "",
        public password : string = "",
        public confirm_password : string = "",
        public street_address : string = "",
        public unit : number = undefined,
        public city : string = "",
        public state : string = "",
        public lucky : boolean = true
    ){}
}
