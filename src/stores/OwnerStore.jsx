import { observable, action, computed } from 'mobx';
import axios from 'axios';

class OwnerStore {
    @observable id = null
    @observable name
    @observable picture
    @observable email
    @observable dogs = []
    @observable status = 1
    @observable activeMarker = false

    @action changeStatus = (userStatus = 1) => {

        if (this.activeMarker) {
            if (this.status <= 2) {
                this.status += 1
            } else if (this.status === 3) {
                this.status = 1
            }
            return this.status
        } else {
            alert("please choose park")
        }
    }

    @action changeUserStatus = async () => {
<<<<<<< HEAD
        let owner =  await axios.get('http://localhost:4000/owner')
        console.log(owner.data)
=======
        let owner = await axios.get('http://localhost:4000/owner')
        console.log(owner.data[0].owner_status)
>>>>>>> ac27666934d715004b3c7b46699648aa6b0264ff
        let newStatus = this.changeStatus(owner.data[0].owner_status)
        await axios.put('http://localhost:4000/owner', { userStatus: newStatus })
    }

    @action addDogToOwner(dog) {
        this.dogs.push(dog)
    }
}

export default OwnerStore;