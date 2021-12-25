import React, { useEffect, useState } from 'react'

import './main.css'

import PicturesT from '../Pictures/Pictures'

function Main({ increment, reset }) {
	let [perso, setPerso] = useState(personajes)
	let [selected, setSelected] = useState(chequeo)

	function shuffle(array) {
		return array.sort(() => Math.random() - 0.5)
	}

	useEffect(() => {
		setPerso(() => {
			return [...shuffle(perso)]
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleClick = key => {
		setPerso(() => {
			return [...shuffle(perso)]
		})
		if (selected[key] === true) {
			setSelected(chequeo)
			reset()
		} else {
			setSelected(prevSel => {
				return {
					...prevSel,
					[key]: !prevSel[key],
				}
			})
			increment()
		}
	}

	let cartas = perso.map(item => {
		return (
			<PicturesT
				handleClick={handleClick}
				key={item.id}
				src={item.src}
				name={item.name}
				id={item.id}
			/>
		)
	})

	return (
		<main className='mainCont'>
			<h2 className='subtitle'>
				You get a point if you select one you havent't yet
			</h2>

			<div className='wrapper'>{cartas}</div>
		</main>
	)
}

export default Main

let personajes = [
	{
		src: 'https://pbs.twimg.com/media/E3MQRLCXoAAqhT7.jpg:large',
		name: 'Hisoka',
		id: 'hisoka',
	},
	{
		src: 'https://www.tierragamer.com/wp-content/uploads/2019/08/Hunter-x-Hunter-Gon-450x300.jpg',
		name: 'Gon',
		id: 'gon',
	},
	{
		src: 'https://i.pinimg.com/originals/27/ca/b9/27cab9588503c762f88e6311751ebddf.jpg',
		name: 'Kurapika',
		id: 'kurapika',
	},
	{
		src: 'https://pbs.twimg.com/media/EvHYsbtWgAgjJ6S.jpg',
		name: 'Chrollo',
		id: 'chrollo',
	},
	{
		src: 'https://www.radiodemente.cl/wp-content/uploads/2020/04/Leorio.jpg',
		name: 'Leorio',
		id: 'leorio',
	},
	{
		src: 'https://sm.ign.com/t/ign_latam/screenshot/default/meruem2_sb8r.1280.jpg',
		name: 'Meruem',
		id: 'meruem',
	},
	{
		src: 'https://i.pinimg.com/736x/33/25/b3/3325b3ab5ee08ded70e1454656467f4c.jpg',
		name: 'Killua',
		id: 'killua',
	},
	{
		src: 'https://i.pinimg.com/474x/b3/46/9b/b3469b100b8c0e042ad96e34ed8f7b85.jpg',
		name: 'illumi',
		id: 'illumi',
	},
	{
		src: 'https://pm1.narvii.com/6297/77de566ac5af1f2352defbb54e853324073e6dd2_hq.jpg',
		name: 'Ging',
		id: 'ging',
	},
	{
		src: 'https://areajugones.sport.es/wp-content/uploads/2020/04/netero.jpg',
		name: 'Netero',
		id: 'netero',
	},
	{
		src: 'https://assets.puzzlefactory.pl/puzzle/286/478/original.jpg',
		name: 'Feitan',
		id: 'feitan',
	},
	{
		src: 'https://i.ytimg.com/vi/-aQ9xbVqjYw/maxresdefault.jpg',
		name: 'Razor',
		id: 'razor',
	},
]

let chequeo = {
	hisoka: false,
	gon: false,
	kurapika: false,
	chrollo: false,
	leorio: false,
	meruem: false,
	killua: false,
	illumi: false,
	ging: false,
	netero: false,
	feitan: false,
	razor: false,
}
