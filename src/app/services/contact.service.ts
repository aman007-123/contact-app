import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serverUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  // Get all contacts
  public getAllContacts(): Observable<IContact[]> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.http
      .get<IContact[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Get single contact
  public getContact(contactId: string): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.http.get<IContact>(dataUrl).pipe(catchError(this.handleError));
  }

  // create contact
  public createContact(contact: IContact): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.http
      .post<IContact>(dataUrl, contact)
      .pipe(catchError(this.handleError));
  }

  // update contact
  public updateContact(
    contact: IContact,
    contactId: string
  ): Observable<IContact> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.http
      .put<IContact>(dataUrl, contact)
      .pipe(catchError(this.handleError));
  }

  // delete contact
  public deleteContact(contactId: string): Observable<{}> {
    let dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.http.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }

  // Get all groups
  public getAllGroup(): Observable<IGroup[]> {
    let dataUrl: string = `${this.serverUrl}/groups`;
    return this.http.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError));
  }

  // Get single group
  public getGroup(contact: IContact): Observable<IGroup> {
    let dataUrl: string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.http.get<IGroup>(dataUrl).pipe(catchError(this.handleError));
  }

  // Error handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error : ${error.error.message}`;
    } else {
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
