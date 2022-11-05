/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./Transforms-1f147cce","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./GeometryOffsetAttribute-daefb9ce"],function(i,R,t,N,B,S,U,F,W,Y,J){"use strict";var f=new B.Cartesian3(1,1,1),j=Math.cos,q=Math.sin;function c(i){i=R.defaultValue(i,R.defaultValue.EMPTY_OBJECT);var t=R.defaultValue(i.radii,f),e=R.defaultValue(i.innerRadii,t),a=R.defaultValue(i.minimumClock,0),n=R.defaultValue(i.maximumClock,N.CesiumMath.TWO_PI),r=R.defaultValue(i.minimumCone,0),o=R.defaultValue(i.maximumCone,N.CesiumMath.PI),s=Math.round(R.defaultValue(i.stackPartitions,10)),m=Math.round(R.defaultValue(i.slicePartitions,8)),u=Math.round(R.defaultValue(i.subdivisions,128));this._radii=B.Cartesian3.clone(t),this._innerRadii=B.Cartesian3.clone(e),this._minimumClock=a,this._maximumClock=n,this._minimumCone=r,this._maximumCone=o,this._stackPartitions=s,this._slicePartitions=m,this._subdivisions=u,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}c.packedLength=2*B.Cartesian3.packedLength+8,c.pack=function(i,t,e){return e=R.defaultValue(e,0),B.Cartesian3.pack(i._radii,t,e),e+=B.Cartesian3.packedLength,B.Cartesian3.pack(i._innerRadii,t,e),e+=B.Cartesian3.packedLength,t[e++]=i._minimumClock,t[e++]=i._maximumClock,t[e++]=i._minimumCone,t[e++]=i._maximumCone,t[e++]=i._stackPartitions,t[e++]=i._slicePartitions,t[e++]=i._subdivisions,t[e]=R.defaultValue(i._offsetAttribute,-1),t};var C=new B.Cartesian3,_=new B.Cartesian3,h={radii:C,innerRadii:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};c.unpack=function(i,t,e){t=R.defaultValue(t,0);var a=B.Cartesian3.unpack(i,t,C);t+=B.Cartesian3.packedLength;var n=B.Cartesian3.unpack(i,t,_);t+=B.Cartesian3.packedLength;var r=i[t++],o=i[t++],s=i[t++],m=i[t++],u=i[t++],f=i[t++],d=i[t++],l=i[t];return R.defined(e)?(e._radii=B.Cartesian3.clone(a,e._radii),e._innerRadii=B.Cartesian3.clone(n,e._innerRadii),e._minimumClock=r,e._maximumClock=o,e._minimumCone=s,e._maximumCone=m,e._stackPartitions=u,e._slicePartitions=f,e._subdivisions=d,e._offsetAttribute=-1===l?void 0:l,e):(h.minimumClock=r,h.maximumClock=o,h.minimumCone=s,h.maximumCone=m,h.stackPartitions=u,h.slicePartitions=f,h.subdivisions=d,h.offsetAttribute=-1===l?void 0:l,new c(h))},c.createGeometry=function(i){var t=i._radii;if(!(t.x<=0||t.y<=0||t.z<=0)){var e=i._innerRadii;if(!(e.x<=0||e.y<=0||e.z<=0)){var a=i._minimumClock,n=i._maximumClock,r=i._minimumCone,o=i._maximumCone,s=i._subdivisions,m=B.Ellipsoid.fromCartesian3(t),u=i._slicePartitions+1,f=i._stackPartitions+1;(u=Math.round(u*Math.abs(n-a)/N.CesiumMath.TWO_PI))<2&&(u=2),(f=Math.round(f*Math.abs(o-r)/N.CesiumMath.PI))<2&&(f=2);var d=0,l=1,c=e.x!==t.x||e.y!==t.y||e.z!==t.z,C=!1,_=!1;c&&(l=2,0<r&&(C=!0,d+=u),o<Math.PI&&(_=!0,d+=u));var h,p,v,y,b=s*l*(f+u),k=new Float64Array(3*b),A=2*(b+d-(u+f)*l),x=Y.IndexDatatype.createTypedArray(b,A),P=0,w=new Array(f),M=new Array(f);for(h=0;h<f;h++)y=r+h*(o-r)/(f-1),w[h]=q(y),M[h]=j(y);var V=new Array(s),g=new Array(s);for(h=0;h<s;h++)v=a+h*(n-a)/(s-1),V[h]=q(v),g[h]=j(v);for(h=0;h<f;h++)for(p=0;p<s;p++)k[P++]=t.x*w[h]*g[p],k[P++]=t.y*w[h]*V[p],k[P++]=t.z*M[h];if(c)for(h=0;h<f;h++)for(p=0;p<s;p++)k[P++]=e.x*w[h]*g[p],k[P++]=e.y*w[h]*V[p],k[P++]=e.z*M[h];for(w.length=s,M.length=s,h=0;h<s;h++)y=r+h*(o-r)/(s-1),w[h]=q(y),M[h]=j(y);for(V.length=u,g.length=u,h=0;h<u;h++)v=a+h*(n-a)/(u-1),V[h]=q(v),g[h]=j(v);for(h=0;h<s;h++)for(p=0;p<u;p++)k[P++]=t.x*w[h]*g[p],k[P++]=t.y*w[h]*V[p],k[P++]=t.z*M[h];if(c)for(h=0;h<s;h++)for(p=0;p<u;p++)k[P++]=e.x*w[h]*g[p],k[P++]=e.y*w[h]*V[p],k[P++]=e.z*M[h];for(h=P=0;h<f*l;h++){var G=h*s;for(p=0;p<s-1;p++)x[P++]=G+p,x[P++]=G+p+1}var E=f*s*l;for(h=0;h<u;h++)for(p=0;p<s-1;p++)x[P++]=E+h+p*u,x[P++]=E+h+(p+1)*u;if(c)for(E=f*s*l+u*s,h=0;h<u;h++)for(p=0;p<s-1;p++)x[P++]=E+h+p*u,x[P++]=E+h+(p+1)*u;if(c){var O=f*s*l,D=O+s*u;if(C)for(h=0;h<u;h++)x[P++]=O+h,x[P++]=D+h;if(_)for(O+=s*u-u,D+=s*u-u,h=0;h<u;h++)x[P++]=O+h,x[P++]=D+h}var I=new W.GeometryAttributes({position:new F.GeometryAttribute({componentDatatype:U.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:k})});if(R.defined(i._offsetAttribute)){var T=k.length,z=new Uint8Array(T/3),L=i._offsetAttribute===J.GeometryOffsetAttribute.NONE?0:1;J.arrayFill(z,L),I.applyOffset=new F.GeometryAttribute({componentDatatype:U.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})}return new F.Geometry({attributes:I,indices:x,primitiveType:F.PrimitiveType.LINES,boundingSphere:S.BoundingSphere.fromEllipsoid(m),offsetAttribute:i._offsetAttribute})}}},i.EllipsoidOutlineGeometry=c});
