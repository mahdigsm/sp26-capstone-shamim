import { redirect } from 'next/navigation';
import React from 'react'

export default function Home () {
  const isLoggedIn =false;
  if(isLoggedIn){
    redirect('/dashboard')
  }
  else{
    redirect('/login')
  }
}
