
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type에 대한 Java 클래스입니다.
 * 
 * <p>다음 스키마 단편이 이 클래스에 포함되는 필요한 콘텐츠를 지정합니다.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetEDocResult" type="{http://ws.baroservice.com/}EDoc" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getEDocResult"
})
@XmlRootElement(name = "GetEDocResponse")
public class GetEDocResponse {

    @XmlElement(name = "GetEDocResult")
    protected EDoc getEDocResult;

    /**
     * getEDocResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link EDoc }
     *     
     */
    public EDoc getGetEDocResult() {
        return getEDocResult;
    }

    /**
     * getEDocResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link EDoc }
     *     
     */
    public void setGetEDocResult(EDoc value) {
        this.getEDocResult = value;
    }

}
