const houseBlueprint = {
    address: "",
    date: new Date(),
    description: "",
    owner: "",
    size: 0,
    getDaysToBuild() {
        return this.size / this._averageBuildSpeed;
    }
}

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
}

HouseBuilder.prototype = Object.create(houseBlueprint);
HouseBuilder.prototype._averageBuildSpeed = 0.5;
