// Класс Transport
class Transport {
	// Конструктор класса с параметрами: тип транспорта, цена транспорта и марка транспорта
	constructor(type, price, brand) {
		this.type = type;
		this.price = price;
		this.brand = brand;
	}
	// Метод для получения информации о транспортном средстве (тип, цена, марка)
	getInfo() {
		return `Type: ${this.type}, Price: ${this.price}, Brand: ${this.brand}`;
	}
	// Метод для получения цены транспортного средства
	getPrice() {
		return this.price;
	}
}

// Класс Car, наследующий от Transport
class Car extends Transport {
	// Конструктор класса Car с параметрами: тип, цена, марка и количество дверей
	constructor(type, price, brand, doorsCount) {
		// Вызов конструктора родительского класса (Transport)
		super(type, price, brand);
		this.doorsCount = doorsCount;
	}
	// Метод для получения количества дверей автомобиля
	getDoorsCount() {
		return this.doorsCount;
	}
}

// Класс Bike, наследующий от Transport
class Bike extends Transport {
	// Конструктор класса Bike с параметрами: тип, цена, марка и максимальная скорость
	constructor(type, price, brand, maxSpeed) {
		// Вызов конструктора родительского класса (Transport)
		super(type, price, brand);
		this.maxSpeed = maxSpeed;
	}
	// Метод для получения максимальной скорости мотоцикла
	getMaxSpeed() {
		return this.maxSpeed;
	}
}

const data = [
	{
		id: 1,
		type: "car",
		brand: "Audi",
		doors: 4,
		price: 4300000,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
	},
	{
		id: 2,
		type: "car",
		brand: "Mercedes-Benz",
		doors: 4,
		price: 2800000,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
	},
	{
		id: 3,
		type: "bike",
		brand: "Harley-Davidson",
		maxSpeed: 210,
		price: 1300000,
		image:
			"https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
	},
	{
		id: 4,
		type: "bike",
		brand: "Harley-Davidson",
		maxSpeed: 220,
		price: 1400000,
		image:
			"https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
	},
];

// Создаём экземпляры объектов на основе данных в массиве
const transportList = data.map((item) => {
	// В зависимости от типа транспортного средства создаём экземпляр класса Car или Bike
	if (item.type === "car") {
		return new Car(item.type, item.price, item.brand, item.doors);
	} else if (item.type === "bike") {
		return new Bike(item.type, item.price, item.brand, item.maxSpeed);
	}
});

// Выводим информацию об экземплярах транспортных средств
transportList.forEach((transport) => {
	// Выводим информацию о транспортном средстве (тип, цена, марка)
	console.log(transport.getInfo());

	// Если транспортное средство является автомобилем, выводим количество дверей
	if (transport instanceof Car) {
		console.log("Doors: " + transport.getDoorsCount());
	}
	// Если транспортное средство является мотоциклом, выводим максимальную скорость
	else if (transport instanceof Bike) {
		console.log("Max Speed: " + transport.getMaxSpeed());
	}
});
