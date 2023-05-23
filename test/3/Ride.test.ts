import { calculateRide } from "../../src/2/main"
import Ride from "../../src/3/Ride";

test("Deve fazer uma corrida em um dia de semana e em horário normal", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

test("Deve fazer uma corrida em um dia de semana e em horário noturno", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T23:00:00"))
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test("Deve fazer uma corrida em um domingo e em horário normal", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T10:00:00"))
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test("Deve fazer uma corrida em um domingo e em horário noturno", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T23:00:00"))
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test("Deve retornar um erro se a distanceancia for inválida", function(){
    const ride = new Ride();
    expect(() => ride.addSegment(-1, new Date("2021-03-07T23:00:00"))).toThrow(new Error("Invalid distance"));
});

test("Deve retornar um erro se a data for inválida", function(){
    const ride = new Ride();
    expect(() => ride.addSegment(10, new Date("abc"))).toThrow(new Error("Invalid date"));
});

test("Deve retornar 10 se o resultado da corrida for menor que 10", function(){
    const ride = new Ride();
    ride.addSegment(2, new Date("2021-03-10T10:00:00"))
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
});