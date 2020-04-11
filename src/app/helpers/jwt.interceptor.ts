import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpResponse, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private router:Router){}
        intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDhiNzNhMjA4MWI4NTRiODFmZmEwYjRhOGRiYjZhMSIsInN1YiI6IjVkZjE1NjcwYTI4NGViMDAxMzU4NWYyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pz-W200RaXXJEHx61VfdMiJ_ENvAl08y-N5_iYU5JfY';
            req = req.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });

            return next.handle(req).pipe(
                tap((event: HttpEvent<any>)=> {
                    if(event instanceof HttpResponse){
                        //console.log(event);
                    }
                }, (err: any) => {
                    if(err instanceof HttpErrorResponse) {
                        if(err.status === 401) {
                            this.router.navigate(['/auth']);
                        }
                    }
                })
            );
        }
}
