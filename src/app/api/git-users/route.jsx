import { NextResponse } from "next/server";

// Esse tipo de GET externo sempre recebera request e params
export async function GET(request, {params}) {
  
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return NextResponse.json(users);
    
}
