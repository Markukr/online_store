import { makeAutoObservable } from "mobx";

export default class DevaceStore {
   constructor() {
      this._types = [
         { id: 1, name: 'Холодильники' },
         { id: 2, name: 'Смартфони' },
      ]
      this._brands = [
         { id: 1, name: 'Samsung' },
         { id: 2, name: 'Apple' },
      ]
      this._devices = [
         { id: 1, name: 'Ihhone 12 pro', price: 25000, rating: 5 },
         { id: 2, name: 'Ihhone 12 pro', price: 25000, rating: 5 },
         { id: 3, name: 'Ihhone 12 pro', price: 25000, rating: 5 },
         { id: 4, name: 'Ihhone 12 pro', price: 25000, rating: 5 },
      ]
      makeAutoObservable(this)
   }

   setTypes(types) {
      this._types = types
   }
   setBrands(brands) {
      this._brands = brands
   }
   setDevices(devices) {
      this._devices = devices
   }

   get types() {
      return this._types
   }
   get brands() {
      return this._brands
   }
   get devices() {
      return this._devices
   }

}