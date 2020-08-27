
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
 *         &lt;element name="GetTaxInvoiceStatesIKResult" type="{http://ws.baroservice.com/}ArrayOfTaxInvoiceState" minOccurs="0"/&gt;
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
    "getTaxInvoiceStatesIKResult"
})
@XmlRootElement(name = "GetTaxInvoiceStatesIKResponse")
public class GetTaxInvoiceStatesIKResponse {

    @XmlElement(name = "GetTaxInvoiceStatesIKResult")
    protected ArrayOfTaxInvoiceState getTaxInvoiceStatesIKResult;

    /**
     * getTaxInvoiceStatesIKResult 속성의 값을 가져옵니다.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfTaxInvoiceState }
     *     
     */
    public ArrayOfTaxInvoiceState getGetTaxInvoiceStatesIKResult() {
        return getTaxInvoiceStatesIKResult;
    }

    /**
     * getTaxInvoiceStatesIKResult 속성의 값을 설정합니다.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfTaxInvoiceState }
     *     
     */
    public void setGetTaxInvoiceStatesIKResult(ArrayOfTaxInvoiceState value) {
        this.getTaxInvoiceStatesIKResult = value;
    }

}
