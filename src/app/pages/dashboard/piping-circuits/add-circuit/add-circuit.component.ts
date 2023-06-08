import { Component, Input } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
    selector: 'ngx-add-circuit',
    templateUrl: './add-circuit.component.html',
})
export class AddCircuitComponent {
        
    constructor(
        private dialog: NbDialogRef<any>
    ) { }

    ngOnInit(): void {
    }

    @Input() dialogData;
    
    imageLink = [
        { src : "https://wallpapercave.com/wp/wp6954364.jpg", alt : "Pipe 1"},
        { src : "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt : "Pipe 2"},
        { src : "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt : "Pipe 3"},
    ]

    closeDialog(arr = null) {
        this.dialog.close()
        console.log(arr)
    }
}