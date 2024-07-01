import {bullfinch, chaffinch, eurasianJay, goshawk, greatSpottedWoodpecker, tawnyOwl} from "@/model/card-birds.js";

export const beech = {
    name: 'beech',
    type: 'beech',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const count = forest.countByName('beech')
        const violetCarpenterBee = forest.cards.find(c => c.name === 'violetCarpenterBee')
        const addCount = violetCarpenterBee.params[0].value
        if (count + addCount >= 4)
            this.points = count * 5
        else
            this.points = 0
    }
}

export const birch = {
    name: 'birch',
    type: 'birch',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('birch')
    }
}

export const douglasFir = {
    name: 'douglasFir',
    type: 'douglasFir',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('douglasFir') * 5
    }
}

export const horseChestnut = {
    name: 'horseChestnut',
    type: 'horseChestnut',
    symbols: ['tree'],
    recalculatePoints(forest) {
        let count = Math.min(forest.countByName('horseChestnut'), 7)
        const violetCarpenterBee = forest.cards.find(c => c.name === 'violetCarpenterBee')
        count += violetCarpenterBee.params[1].value
        this.points = count * count
    }
}

export const linden = {
    name: 'linden',
    type: 'linden',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const lindensInThisForest = forest.countByName('linden')
        this.points = lindensInThisForest * (forest.hasMostOfName("linden") ? 3 : 1)
    }
}

export const oak = {
    name: 'oak',
    type: 'oak',
    symbols: ['tree'],
    recalculatePoints(forest) {
        const differentTreeTypes = forest.cards.filter(c => c.symbols.indexOf('tree') >= 0 && c.name !== 'treeSaplings' && c.count > 0).length
        if (differentTreeTypes === 8)
            this.points = forest.countByName('oak') * 10
        else this.points = 0
    }
}

export const silverFir = {
    name: 'silverFir',
    type: 'silverFir',
    symbols: ['tree'],
    params: [{
        name: 'cardsAttachedToSilverFirs',
        type: 'number',
        value: 0,
        unrestricted: true
    }],
    recalculatePoints(forest) {
        this.points = this.params[0].value * 2
    }
}

export const sycamore = {
    name: 'sycamore',
    type: 'sycamore',
    symbols: ['tree'],
    recalculatePoints(forest) {
        this.points = forest.countByName('sycamore') * forest.countBySymbol('tree')
    }
}

export const treeSaplings = {
    name: 'treeSaplings',
    type: 'none',
    symbols: ['tree'],
    recalculatePoints(forest) {
    }
}

export const allTreesInBaseGame = [beech, birch, douglasFir, horseChestnut, linden, oak, silverFir, sycamore, treeSaplings]





